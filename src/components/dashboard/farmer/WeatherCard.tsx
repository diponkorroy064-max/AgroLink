"use client";
import {
    CloudSun,
    Droplets,
    Wind,
    Thermometer,
    MapPin,
} from "lucide-react";

export default function WeatherCard() {
    const weather = {
        location: "Dhaka, Bangladesh",
        temperature: 31,
        condition: "Partly Cloudy",
        humidity: 72,
        wind: 12,
        feelsLike: 34,
    };

    return (
        <section className="overflow-hidden rounded-3xl bg-linear-to-br from-sky-500 via-blue-500 to-indigo-600 p-6 text-white shadow-lg">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm uppercase tracking-widest text-sky-100">
                        Today`s Weather
                    </p>

                    <h2 className="mt-2 text-5xl font-bold">
                        {weather.temperature}°
                    </h2>

                    <p className="mt-2 text-lg font-medium">
                        {weather.condition}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sky-100">
                        <MapPin size={18} />
                        <span>{weather.location}</span>
                    </div>
                </div>

                <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                    <CloudSun size={60} />
                </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <Droplets className="mb-2" size={24} />

                    <p className="text-sm text-sky-100">
                        Humidity
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                        {weather.humidity}%
                    </h3>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <Wind className="mb-2" size={24} />

                    <p className="text-sm text-sky-100">
                        Wind
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                        {weather.wind} km/h
                    </h3>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                    <Thermometer className="mb-2" size={24} />

                    <p className="text-sm text-sky-100">
                        Feels Like
                    </p>

                    <h3 className="mt-1 text-2xl font-bold">
                        {weather.feelsLike}°
                    </h3>
                </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <h4 className="font-semibold">
                    🌱 Farming Tip
                </h4>

                <p className="mt-2 text-sm leading-6 text-sky-100">
                    Today`s weather is ideal for irrigation in the early
                    morning or evening to reduce water loss from evaporation.
                </p>
            </div>
        </section>
    );
}
