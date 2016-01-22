from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def index(request):
    return Response("Server is Running...", status = status.HTTP_200_OK)

@api_view(['GET'])
def ping(request):
    """
    Endpoint for health check
    """
    return Response("PONG", status = status.HTTP_200_OK)

@api_view(['GET'])
def notfound(request):
    """
    Endpoint to return 404 NotFound
    """
    return Response("NotFound", status = status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def badrequest(request):
    """
    Endpoint to return 400 BadRequest
    """
    return Response("BadRequest", status = status.HTTP_400_BAD_REQUEST)
