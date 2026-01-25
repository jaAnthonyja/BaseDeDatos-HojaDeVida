"""Static admin forms for trayectoria models. Safe and non-invasive."""
from django import forms
from django.utils.translation import gettext_lazy as _
from .models import CursoRealizado, Reconocimiento, ExperienciaLaboral
from datetime import date


class CursoRealizadoAdminForm(forms.ModelForm):
    """Static form for CursoRealizado in Django Admin."""
    certificado_subir = forms.FileField(required=False, label=_('Certificado (PDF)'))

    class Meta:
        model = CursoRealizado
        fields = '__all__'

    def clean_certificado_subir(self):
        f = self.cleaned_data.get('certificado_subir')
        if not f:
            return f
        content_type = getattr(f, 'content_type', None)
        name = getattr(f, 'name', '')
        if content_type and content_type != 'application/pdf':
            raise forms.ValidationError(_('Sólo se aceptan archivos PDF (content-type inválido).'))
        if not name.lower().endswith('.pdf'):
            raise forms.ValidationError(_('El archivo debe tener extensión .pdf'))
        return f

    def clean(self):
        cleaned_data = super().clean()
        fecha_inicio = cleaned_data.get('fechainicio')
        fecha_fin = cleaned_data.get('fechafin')
        
        # Validar que fecha inicio no sea mayor a fecha fin
        if fecha_inicio and fecha_fin and fecha_inicio > fecha_fin:
            raise forms.ValidationError('Error: Vuelva a ingresar las fechas')
        
        # Validar que fecha fin no sea mayor a enero 2026
        max_date = date(2026, 1, 31)
        if fecha_fin and fecha_fin > max_date:
            raise forms.ValidationError('Error: Vuelva a ingresar las fechas')
        
        return cleaned_data


class ReconocimientoAdminForm(forms.ModelForm):
    """Static form for Reconocimiento in Django Admin."""
    certificado_subir = forms.FileField(required=False, label=_('Certificado (PDF)'))

    class Meta:
        model = Reconocimiento
        fields = '__all__'

    def clean_certificado_subir(self):
        f = self.cleaned_data.get('certificado_subir')
        if not f:
            return f
        content_type = getattr(f, 'content_type', None)
        name = getattr(f, 'name', '')
        if content_type and content_type != 'application/pdf':
            raise forms.ValidationError(_('Sólo se aceptan archivos PDF (content-type inválido).'))
        if not name.lower().endswith('.pdf'):
            raise forms.ValidationError(_('El archivo debe tener extensión .pdf'))
        return f

    def clean(self):
        cleaned_data = super().clean()
        fecha_reconocimiento = cleaned_data.get('fechareconocimiento')
        
        # Validar que fecha no sea mayor a enero 2026
        max_date = date(2026, 1, 31)
        if fecha_reconocimiento and fecha_reconocimiento > max_date:
            raise forms.ValidationError('Error: Vuelva a ingresar las fechas')
        
        return cleaned_data


class ExperienciaLaboralAdminForm(forms.ModelForm):
    """Static form for ExperienciaLaboral in Django Admin."""
    certificado_subir = forms.FileField(required=False, label=_('Certificado (PDF)'))

    class Meta:
        model = ExperienciaLaboral
        fields = '__all__'

    def clean_certificado_subir(self):
        f = self.cleaned_data.get('certificado_subir')
        if not f:
            return f
        content_type = getattr(f, 'content_type', None)
        name = getattr(f, 'name', '')
        if content_type and content_type != 'application/pdf':
            raise forms.ValidationError(_('Sólo se aceptan archivos PDF (content-type inválido).'))
        if not name.lower().endswith('.pdf'):
            raise forms.ValidationError(_('El archivo debe tener extensión .pdf'))
        return f

    def clean(self):
        cleaned_data = super().clean()
        fecha_inicio = cleaned_data.get('fechainiciogestion')
        fecha_fin = cleaned_data.get('fechafingestion')
        
        # Validar que fecha inicio no sea mayor a fecha fin
        if fecha_inicio and fecha_fin and fecha_inicio > fecha_fin:
            raise forms.ValidationError('Error: Vuelva a ingresar las fechas')
        
        # Validar que fecha fin no sea mayor a enero 2026
        max_date = date(2026, 1, 31)
        if fecha_fin and fecha_fin > max_date:
            raise forms.ValidationError('Error: Vuelva a ingresar las fechas')
        
        return cleaned_data
