package File;
use strict;
use warnings 'all';
use feature qw/say/;

sub new {
    my ( $class, $args ) = @_;
    
    my $self = {
        name        => $args->{name} || 'no name',
        size        => $args->{size} || 0,
    };
    
    bless $self, $class;
    
    say "$self->{name}: $self->{size}";

    return $self;
}

1;