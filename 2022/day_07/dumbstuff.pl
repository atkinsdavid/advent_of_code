use strict;
use warnings 'all';
use feature qw/say/;
use Data::Dumper;

## loop through array using iterator
# my @x = (1..9);
# for my $i (0 .. $#x) {
#     print "$i: $x[$i]\n";
# }


##loop array from file (or ENV _DATA_)) using lines as startstop flags





# my $spool = 0;
# my @matchingLines;
# my @thisone;
# my $thisone = \@thisone;

# while (<DATA>) {
#     if (/StartPattern/i) {
#         $spool = 1;
#         next;
#     }
#     elsif (/Endpattern/i) {
#         $spool = 0;
        
#         push (@matchingLines, $thisone);
#         @thisone = ();
#     }
#     if ($spool) {
#         push (@thisone, $_);
#     }
# }
# # say Dumper(@matchingLines);
# # foreach (@matchingLines){
# #     say Dumper($_);
# # };

# __DATA__
# Text
# Text
# Startpattern
# print this line
# Print this line
# print this line
# Endpattern
# Text
# Text
# Text
# Startpattern
# print this other line
# Endpattern


if (my $new_var = 10000) {
    say $new_var;
} else {
    say "No se";
};
