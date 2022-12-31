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


class PaperDeleteView(generics.DestroyAPIView):
    serializer_class = PaperSerializer
    permission_classes = [permissions.IsAdminUser]
    
    def delete(self, request, *args, **kwargs):
        paper_obj = paper.objects.filter(paper_id=request.data.get('paper_id')).first()
        if paper_obj:
            paper_obj.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)