
  
from django.urls import  re_path
from API import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    re_path(r'^books/$',views.bookApi),
    re_path(r'^books/(?P<id>[0-9999])/$',views.bookApi),
    re_path(r'^content/$',views.contentApi),
    re_path(r'^content/(?P<id>[0-9999])/$',views.contentApi),
    re_path(r'^bookmark/(?P<id>[0-9999])/$',views.bookmarkApi),
    re_path(r'^bookmark/$',views.bookmarkApi),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
