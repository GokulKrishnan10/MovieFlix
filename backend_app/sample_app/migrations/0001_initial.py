# Generated by Django 3.2.20 on 2023-07-18 11:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('name', models.CharField(max_length=30)),
                ('email_id', models.CharField(max_length=40, primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=50)),
                ('phone_number', models.CharField(max_length=10)),
            ],
        ),
    ]
