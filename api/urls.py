from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'^api/ping$', views.ping, name = 'ping'),
    url(r'^api/notfound$', views.notfound, name = 'notfound'),
    url(r'^api/badrequest$', views.badrequest, name = 'badrequest'),
]
