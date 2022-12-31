from django.shortcuts import render
from .serializer import PaperSerializer
from rest_framework import permissions,status
from rest_framework.response import Response
from rest_framework import generics
from .models import paper
# Create your views here.

class PaperSaveView(generics.GenericAPIView):
    serializer_class = PaperSerializer
    permission_classes = [permissions.IsAdminUser]

    def post(self, request, *args, **kwargs):
        data = dict(request.data)
        data['publicer'] = request.user
        serializer = self.get_serializer(data=data)
        serializer.is_valid()
        serializer.save(data)
        return Response(status=status.HTTP_200_OK)
    
class PaperListView(generics.ListAPIView):
    queryset = paper.objects.all()
    serializer_class = PaperSerializer
    permission_classes = [permissions.IsAuthenticated]