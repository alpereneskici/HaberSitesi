# Generated by Django 4.1.4 on 2022-12-31 09:33

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('paper', '0003_remove_paper_publicer_paper_publicer'),
    ]

    operations = [
        migrations.AddField(
            model_name='paper',
            name='paper_id',
            field=models.CharField(default=django.utils.timezone.now, max_length=32),
            preserve_default=False,
        ),
    ]
