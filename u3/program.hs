{-# LANGUAGE LambdaCase #-}

func 0 = -1
func n = n * 2

func' n | n == 0 = -1
        | n >= 1 = n * 2

-- \case n | n == 0     -> -1
--         | n >= 1    -> n * 2

-- \n -> case () of _ 
--   | n == 0 -> -n
--   | n >= 1 -> n*2
-- func'' = \case 
--         n | n == 0 -> -1
--           | n >= 1 -> n * 2
--
sum' [ ] = 0 
sum' (x:xs) = x + sum' xs

main = print (sum' [1..10] )
