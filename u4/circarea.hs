data Figure = Circle Double | Rectangular Double Double deriving (Show)
cirea :: Figure -> Double

cirea (Circle r) =  3.1415926 * r * 2
cirea (Rectangular l w)=  l*w

main = do print (cirea (Circle 12))
          print (cirea (Rectangular 3 4))
