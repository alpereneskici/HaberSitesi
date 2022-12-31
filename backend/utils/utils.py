from django.core.exceptions import ValidationError
from django.core.validators import validate_email as django_validate_email
from django.db import transaction

def validate_email(value):
    """Validate a single email."""
    if not value:
        return False
    # Check the regex, using the validate_email from django.
    try:
        django_validate_email(value)
        return True
    except ValidationError:
        return False