# Generated by Django 4.1.4 on 2022-12-31 09:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('paper', '0004_paper_paper_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='paper',
            name='paper_id',
            field=models.CharField(max_length=32, unique=True),
        ),
    ]
