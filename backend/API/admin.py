from django.contrib import admin
from API.models import Books,Content,BookMark

admin.site.register(Books)
@admin.register(Content)
@admin.register(BookMark)


class PostAdmin(admin.ModelAdmin):
    class Media:
        js= ('tinyInject.js',)
