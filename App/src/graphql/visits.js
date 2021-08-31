import { gql } from "@apollo/client";


export const SEE_VISITS_QUERY = gql`
query(
  $xRngFrom:Float,
  $xRngTo:Float,
  $yRngFrom:Float,
  $yRngTo:Float
){
  seeVisits(
    xRngFrom:$xRngFrom, 
    xRngTo:$xRngTo, 
    yRngFrom:$yRngFrom, 
    yRngTo:$yRngTo
  ){
    id
    name
    date{
      id
      name
      yyyymmdd
    }
    place{
      id
      name
    }
    photos{
      id
      file
      posX
      posY
      datetime
    }
    rating{
      rating
    }
    posX
    posY
    comment
  }
}
`;