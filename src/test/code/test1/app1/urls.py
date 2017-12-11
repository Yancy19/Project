from django.conf.urls import url
from views import hello1 as h

urlpatterns = [
    url(r'^$', h),
]