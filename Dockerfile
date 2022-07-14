#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY 837CoreWebApiCareCloud/837CoreWebApiCareCloud.csproj ./837CoreWebApiCareCloud/
COPY Infra-Structure/Infra-Structure.csproj ./Infra-Structure/
COPY Core-Context/Core-Context.csproj ./Core-Context/
RUN dotnet restore "837CoreWebApiCareCloud/837CoreWebApiCareCloud.csproj"
COPY . .
WORKDIR "/src/837CoreWebApiCareCloud"
RUN dotnet build "837CoreWebApiCareCloud.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "837CoreWebApiCareCloud.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "837CoreWebApiCareCloud.dll"]