import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "shrug()", role: "🤷", summary: "U+1F937" },
        { id: 2, name: "think()", role: "🤔", summary: "U+1F914"  },
        { id: 3, name: "facepalm()", role: "🤦" , summary: "U+1F926" },
        { id: 4, name: "lit()", role: "🔥" , summary: "U+1F525" },
        { id: 5, name: "party()", role: "🎉", summary: "U+1F389"  },
        { id: 6, name: "flex()", role: "💪", summary: "U+1F4AA"  },
        { id: 7, name: "fistbump()", role: "👊" , summary: "U+1F44A" },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
