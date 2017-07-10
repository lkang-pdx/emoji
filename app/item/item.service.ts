import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "🤷", role: "Person Shrugging" },
        { id: 2, name: "🤔", role: "Thinking Face" },
        { id: 3, name: "🤦", role: "Person Facepalming" },
        { id: 4, name: "😂", role: "Face With Tears of Joy" },
        { id: 5, name: "🎉", role: "Celebration" },
        { id: 6, name: "😍", role: "Smiling Face With Heart-Eyes" },
        { id: 7, name: "🔥", role: "Fire" },
        { id: 8, name: "💪", role: "Flexed Biceps" },
        { id: 9, name: "💯", role: "Hundred Points" },
        { id: 10, name: "👊", role: "Fist Bump" },
    );

    getItems(): Item[] {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
