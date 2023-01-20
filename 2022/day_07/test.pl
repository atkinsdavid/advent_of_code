use strict;
use warnings 'all';
use feature qw/say/;
use Data::Dumper;
use lib '/Users/davidatkins/repos/advevnt_of_code_2022/day_07/';
use Directory;
use File;

my ($dirs,$files,$comms) = (0) x 3;
my @dirarray;
my %contents;
my $contents = \%contents;
my $dir;
my $isdir;
my $filename = './input.txt';
open (FH, '<', $filename) or die $!;
    say "File $filename opened successfully!";
    while (<FH>) {
        if (/\$ cd ../) {
            # $isdir = 0;
            next;
        } elsif (/\$ cd [^..]/) {
                say "Inside " . $dir->{name} if $dir->{name};
            $dirs++;
            my @linearr = split(' ',$_);
            my $dirname = 'dir_'.$linearr[2];
            # if (!$isdir) {
                $dir = Directory->new (
                    {
                        name        => $dirname,
                        contents    => $contents,
                    }
                );
                push ( @dirarray , $dir );
                # $isdir = 1;
            # };
            say "DIR NAME: " . $dir->{name};
        } elsif (/\$ ls/) {
            $comms++;
            next;
        } elsif (/^dir /) {
            # if ($isdir) {
                say "Inside " . $dir->{name};
                my @linearr = split(' ',$_);
                my $dirname = $linearr[1];
                say 'dir_'.$dirname;
                $contents{'dir'} = 'dir_'.$dirname;
                $dir->{contents}  = $contents;
                # say "contains: " . $dir->{contents};
            # }
        } elsif (/^[0-9]/) {
            # if ($isdir) {
                say "Inside " . $dir->{name};
                $files++;
                my @linearr = split(' ',$_);
                my $name = $linearr[1];
                my $filesize = $linearr[0];
                my $file = File->new (
                    {
                        name    => $name,
                        size    => $filesize,
                    }
                );
                $contents{$name} = $filesize;
                $dir->{contents}  = $contents;
                # say "contains: " . $dir->{contents};
            # }
        }
    }
close(FH);

say Dumper(@dirarray);

say "#Dirs: $dirs, #Files: $files, #Commands: $comms";
say "--------------------------------------------";
