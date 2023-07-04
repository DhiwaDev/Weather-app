package com.example.weatherapp;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WeatherService {
    @Value("${openweathermap.apiKey}")
    private String apiKey;

    public String getWeatherByCity(String cityName) {
        String apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + apiKey;

        RestTemplate restTemplate = new RestTemplate();
        String weatherData = restTemplate.getForObject(apiUrl, String.class);

        return weatherData;
    }
}


