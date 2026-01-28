from django.core.exceptions import ValidationError
from datetime import date


def validate_fecha_nacimiento(value):
    """Validar que la fecha de nacimiento esté entre 1981 y 2026."""
    if not value:
        return
    min_date = date(1981, 1, 1)
    max_date = date(2026, 1, 31)
    if value < min_date or value > max_date:
        raise ValidationError('La fecha de nacimiento debe estar entre 1981 y 2026.')


def validate_fecha_inicio_fin(inicio, fin):
    """Validar que fecha inicio no sea mayor a fecha fin."""
    if inicio and fin and inicio > fin:
        raise ValidationError('La fecha de inicio no puede ser mayor a la fecha de fin.')


def validate_fecha_fin_enero_2026(value):
    """Validar que la fecha final no sea mayor a enero de 2026."""
    max_date = date(2026, 1, 31)
    if value and value > max_date:
        raise ValidationError('La fecha final no puede ser mayor a enero de 2026.')
