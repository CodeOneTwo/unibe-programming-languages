fak 0 = 1
fak n = n * fak (n-1)
calcCatalan n = fak (2*n) /  (fak (n+1) * fak n)
map' f [] = []
map' f (x:xs) = f x : map f xs
firstNCatalan n = map' calcCatalan [0..n]
main = print (firstNCatalan 12)
