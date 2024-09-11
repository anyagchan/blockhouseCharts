from django.shortcuts import render
from django.http import JsonResponse


def candlestick_data(request):
    data = {
        "data": [
            {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            {"x": "2023-01-03", "open": 33, "high": 37, "low": 31, "close": 35},
            {"x": "2023-01-04", "open": 35, "high": 38, "low": 33, "close": 34},
            {"x": "2023-01-05", "open": 34, "high": 36, "low": 32, "close": 33},
            {"x": "2023-01-06", "open": 33, "high": 37, "low": 31, "close": 36},
            {"x": "2023-01-07", "open": 36, "high": 40, "low": 34, "close": 39},
            {"x": "2023-01-08", "open": 39, "high": 43, "low": 36, "close": 41},
            {"x": "2023-01-09", "open": 41, "high": 44, "low": 38, "close": 40},
            {"x": "2023-01-10", "open": 40, "high": 43, "low": 37, "close": 42},
            {"x": "2023-01-11", "open": 42, "high": 46, "low": 39, "close": 45},
            {"x": "2023-01-12", "open": 45, "high": 48, "low": 43, "close": 46},
            {"x": "2023-01-13", "open": 46, "high": 49, "low": 44, "close": 47},
            {"x": "2023-01-14", "open": 47, "high": 50, "low": 45, "close": 48},
            {"x": "2023-01-15", "open": 48, "high": 51, "low": 46, "close": 49},
            {"x": "2023-01-16", "open": 49, "high": 52, "low": 47, "close": 50},
            {"x": "2023-01-17", "open": 50, "high": 53, "low": 48, "close": 52},
            {"x": "2023-01-18", "open": 52, "high": 55, "low": 50, "close": 54},
            {"x": "2023-01-19", "open": 54, "high": 57, "low": 52, "close": 56},
            {"x": "2023-01-20", "open": 56, "high": 59, "low": 54, "close": 58},
            {"x": "2023-01-21", "open": 58, "high": 60, "low": 55, "close": 57},
            {"x": "2023-01-22", "open": 57, "high": 58, "low": 53, "close": 55},
            {"x": "2023-01-23", "open": 55, "high": 56, "low": 50, "close": 52},
            {"x": "2023-01-24", "open": 52, "high": 53, "low": 48, "close": 50},
            {"x": "2023-01-25", "open": 50, "high": 52, "low": 45, "close": 47},
            {"x": "2023-01-26", "open": 47, "high": 48, "low": 43, "close": 44},
            {"x": "2023-01-27", "open": 44, "high": 45, "low": 40, "close": 42}
        ]
    }
    return JsonResponse(data)

def line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }
    return JsonResponse(data)

def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }
    return JsonResponse(data)

def pie_chart_data(request):
    data = {
        "labels": ["Red", "Blue", "Yellow"],
        "data": [300, 50, 100]
    }
    return JsonResponse(data)
