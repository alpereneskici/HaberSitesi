
from rest_framework import serializers
from .models import paper
from apps.user.models import User

class PaperSerializer(serializers.ModelSerializer):
    class Meta:
        model = paper
        fields = ["contents","headers","paper_id"]

    def create(self, validated_data):
        user = validated_data.pop('publicer')
        papers = paper.objects.create(**validated_data)
        papers.publicer.add(user)
        papers.save()
        return papers
    
    def update(self, validated_data,papers):
        user = validated_data.pop('publicer')
        user = User.objects.filter(email = user)
        papers.update(**validated_data)
        papers = papers[0]
        papers.publicer.set(user)
        papers.save()
        return papers
    

    def save(self, validated_data):
        papers = paper.objects.filter(paper_id = validated_data.get('paper_id'))
        if papers:
            papers = self.update(validated_data,papers)
        else:
            papers = self.create(validated_data)
        return papers