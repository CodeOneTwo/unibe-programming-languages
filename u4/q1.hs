mymod :: Int -> Int -> Int
mymod n i = n+i
factors n = [x | x <- [1..n-1], mymod n x == 0 ]
isPerfect n = sum (factors n) == n
insert _ n [] = [n]
insert 0 n l = n:l
insert i n (x:xs) = x : insert (i-1) n xs
mH (a, b, c) = c
main = print :t factors
