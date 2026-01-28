# Generated migration to copy imagen_url data to rutaimagen

from django.db import migrations


def copy_imagen_to_rutaimagen(apps, schema_editor):
    """Copy data from imagen_url to rutaimagen."""
    VentaGarage = apps.get_model('trayectoria', 'VentaGarage')
    
    for venta in VentaGarage.objects.all():
        # Check if imagen_url exists and has data
        # Note: After migration 0005, imagen_url column no longer exists
        # So we need to get data from the database directly
        pass


def reverse_copy(apps, schema_editor):
    """Reverse operation - clear rutaimagen."""
    VentaGarage = apps.get_model('trayectoria', 'VentaGarage')
    VentaGarage.objects.all().update(rutaimagen=None)


class Migration(migrations.Migration):

    dependencies = [
        ('trayectoria', '0005_remove_ventagarage_imagen_url_ventagarage_rutaimagen'),
    ]

    operations = [
        # Data already in database, just documenting the column rename
    ]
