from django.core.management.base import BaseCommand
from apps.perfil.models import VisibilidadSecciones


class Command(BaseCommand):
    help = 'Crea la instancia inicial de VisibilidadSecciones si no existe'

    def handle(self, *args, **options):
        if not VisibilidadSecciones.objects.exists():
            VisibilidadSecciones.objects.create()
            self.stdout.write(self.style.SUCCESS('Instancia de VisibilidadSecciones creada exitosamente'))
        else:
            self.stdout.write(self.style.WARNING('VisibilidadSecciones ya existe'))
