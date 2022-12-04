const getNum0To255 = () => Math.floor(Math.random() * 256);

class Color {
    get() {
        const color = `rgb(${getNum0To255()}, ${getNum0To255()}, ${getNum0To255()})`;
        return color;
    }
}

const color = new Color();

console.log(color.get());