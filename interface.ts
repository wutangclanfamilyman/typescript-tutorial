interface Rect {
    readonly id: string
    color?: string // not required
    size: {
        width: number,
        height: number
    }
}

const rect1: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 20
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '1232421',
    size: {
        width: 22,
        height: 33
    }
}

rect2.color = 'black';
// rect2.id = '333' ERROR
 
const rect3 = {} as Rect
const rect4 = <Rect>{}

// ===================

interface RectWithArea extends Rect {
    getArea: () => number // Func getArea type Func and return number
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 22,
        height: 31,
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ==================

interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }

}

// ====================

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}