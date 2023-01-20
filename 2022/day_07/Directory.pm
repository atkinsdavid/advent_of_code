package Directory;
use strict;
use warnings 'all';
use feature qw/say/;

sub new {
    my ( $class, $args ) = @_;
    
    my $self = {
        name        => $args->{name} || 'no name',
        size        => $args->{size} || 0,
        contents    => $args->{contents} || 0,
    };
    
    # say "$self->{name}: $self->{size}";
    bless $self, $class;
    
    # $self->{size} = $self->dir_size;
    # say "$self->{name}: $self->{size}";

    return $self;
}

sub dir_size {
    my $self = shift;

    my $contents = $self->{contents};
    my $sum = 0;

    if ($contents) {
        for my $key (keys %{$contents}) {
            next if $key eq 'dir';
            $sum = $sum + ${$contents}{$key};
        };
    };
    
    $self->{size} = $sum;
    return $sum;
}

1;