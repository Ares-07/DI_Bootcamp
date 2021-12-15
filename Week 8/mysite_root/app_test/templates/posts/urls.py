urlpatterns = [
    path('', views.index, name='index'),
    path('all/', views.posts, name='posts'),
]