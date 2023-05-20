import { useRef, useEffect } from "react";
import { Input } from "@material-tailwind/react";

const AutoComplete = () => {
 const autoCompleteRef = useRef();
 const cityRef = useRef();
 const inputRef = useRef();
//  const options = {
//     componentRestrictions: { country: "ng" },
//     fields: ["address_components", "geometry", "icon", "name"],
//     types: ["establishment"]
//   };
 useEffect(() => {
  autoCompleteRef.current = new window.google.maps.places.Autocomplete(
    document.getElementById("autocomplete")
    //cityRef.current,
   //options
  );
  autoCompleteRef.current.addListener("place_changed", async function () {
   const place = await autoCompleteRef.current.getPlace();
   console.log({ place });
  });
 }, []);
 return (
  <div>
   <label>enter address :</label>
   <Input  id="autocomplete" variant="outlined" label="City" type="text" ref={cityRef}></Input>
   <br /><br />
   <Input variant="outlined" label="Outlined" type="text" ref={inputRef}></Input>
   
  </div>
 );
};
export default AutoComplete;