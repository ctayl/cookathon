import { ACTIONS, STATE } from "../data/Enums";
import { basicPantries } from "./BasicPantries";

export const pizza = {
    "id": 0,
    "name": "Pizza",
    "image": "../widget/images/food/pizza.png",
    "stages": [
        {
            "pantries": [basicPantries[3]],//pizza base
            "quantity": 1,
            "state": STATE.RAW,//needs to be raw
            "prepClicks": 10,
            "cookTime": 0,
            "order": null,
            "action": ACTIONS.PREP,
            "image":"../widget/images/pantries_prepped/pizza_base.png"
        },
        {
            "pantries": [basicPantries[4]],//pizza meat
            "quantity": 1,
            "state": STATE.RAW,//needs to be raw
            "prepClicks": 14,
            "cookTime": 0,
            "order": null,
            "action": ACTIONS.PREP,
            "image":"../widget/images/pantries_prepped/salami.png"
        },
        {
            "pantries": [basicPantries[5]],//pizza tomato
            "quantity": 1,
            "state": STATE.RAW,//needs to be raw
            "prepClicks": 5,
            "image":"",
            "cookTime": 0,
            "order": null,
            "action": ACTIONS.PREP,
            "image":"../widget/images/pantries_prepped/tomato-sauce.png"
        },
        {
            "pantries": [basicPantries[3]],//pizza base
            "quantity": 1,
            "state": STATE.PREP,//needs to be prep
            "prepClicks": 0,
            "cookTime": 10,
            "order": 1,//Having order set as one means that they need to be baked together
            "action": ACTIONS.COOK,
            "image":"../widget/images/food/pizza.png"
        },
        {
            "pantries": [basicPantries[4]],//pizza meat
            "quantity": 1,
            "state": STATE.PREP,//needs to be prep
            "prepClicks": 0,
            "cookTime": 4,
            "order": 1,//Having order set as one means that they need to be baked together
            "action": ACTIONS.COOK,
            "image":"../widget/images/food/pizza.png"
        },
        {
            "pantries": [basicPantries[5]],//pizza tomato
            "quantity": 1,
            "state": STATE.PREP,//needs to be prep
            "prepClicks": 0,
            "cookTime": 2,
            "order": 1,//Having order set as one means that they need to be baked together
            "action": ACTIONS.COOK,
            "image":"../widget/images/food/pizza.png"
        }
    ]
}