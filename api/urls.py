from django.conf.urls import url
from api import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^api/ping$', views.ping, name = 'ping'),
    url(r'^api/notfound$', views.notfound, name = 'notfound'),
    url(r'^api/badrequest$', views.badrequest, name = 'badrequest'),
]
