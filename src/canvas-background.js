/**
 * @constant defaultOptions
 * @type {{type: string, encoderOptions: number}}
 */
const defaultOptions = { type: 'image/png', encoderOptions: 0.92 };

/**
 * @see http://www.mikechambers.com/blog/2011/01/31/setting-the-background-color-when-generating-images-from-canvas-todataurl/
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
 *
 * @param {HTMLElement} canvas
 * @param {String} backgroundColour
 * @param {String} type
 * @param {Number} encoderOptions
 * @return {String}
 */
export default (canvas, backgroundColour, { type, encoderOptions } = defaultOptions) => {

    const context = canvas.getContext('2d');

    if (!context) {
        return '';
    }

    const width = canvas.width;
    const height = canvas.height;

    const data = context.getImageData(0, 0, width, height);
    const compositeOperation = context.globalCompositeOperation;

    if (backgroundColour) {

        context.globalCompositeOperation = 'destination-over';
        context.fillStyle = backgroundColour;
        context.fillRect(0, 0, width, height);

    }

    const imageData = canvas.toDataURL(type, encoderOptions);

    if (backgroundColour) {
        context.clearRect (0, 0, width, height);
        context.putImageData(data, 0, 0);
        context.globalCompositeOperation = compositeOperation;
    }

    return imageData;

};
