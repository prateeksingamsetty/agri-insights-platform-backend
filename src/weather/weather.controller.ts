import { Controller, Get } from "@nestjs/common";
import { WeatherService } from "./weather.service";
import { Weather } from "./schemas/weather.schema";

@Controller('weather')
export class weatherController{
    constructor(private weatherService: WeatherService){}

    @Get('')
    async getAllWeatherData():Promise<Weather[]>{
        const weatherData = await this.weatherService.getAllWeatherData()
        console.log('weatherData ', weatherData);
        return weatherData
    }
}