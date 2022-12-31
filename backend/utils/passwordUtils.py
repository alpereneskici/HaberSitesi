import re
from django.core.exceptions import ValidationError


def NumberValidator(password, user=None):
    if not re.findall('\d', password):
        raise ValidationError(
            ("The password must contain at least 1 digit, 0-9."),
            code='password_no_number',
        )


def UppercaseValidator(password, user=None):
    if not re.findall('[A-Z]', password):
        raise ValidationError(
            ("The password must contain at least 1 uppercase letter, A-Z."),
            code='password_no_upper',
        )



def LowercaseValidator(password, user=None):
    if not re.findall('[a-z]', password):
        raise ValidationError(
            ("The password must contain at least 1 lowercase letter, a-z."),
            code='password_no_lower',
        )
    

def SymbolValidator(password, user=None):
    if not re.findall('[()[\]{}|\\`~!@#$%^&*_\-+=;:\'",<>./?]', password):
        raise ValidationError(
            ("The password must contain at least 1 symbol: " +
            "()[]{}|\`~!@#$%^&*_-+=;:'\",<>./?"),
            code='password_no_symbol',
            )
    
    

def validate_password(password):
    UppercaseValidator(password)
    NumberValidator(password)
    LowercaseValidator(password)
    SymbolValidator(password)
