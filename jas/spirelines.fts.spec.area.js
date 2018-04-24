function SpireLines_FTS_Spec_Area_Plot(InputPDF){
    
    // https://developer.tizen.org/community/tip-tech/displaying-pdf-files-pdf.js-library
    var url = InputPDF;
    PDFJS.workerSrc = '/jas/pdf.worker.js';
    PDFJS.disableWorker = true;
    PDFJS.getDocument(url).then(function getPdfHelloWorld(pdf) {
        pdf.getPage(1).then(function getPageHelloWorld(page) {
            // Prepare canvas using PDF page dimensions
            var canvas = document.getElementById('SpireLines_FTS_Spec_Area');
            var context = canvas.getContext('2d');
            
            // Set Canvas Shadow
            // Set the shadow properties that control the appearance of the shaow
            context.shadowColor   = 'DarkGoldenRod';
            context.shadowOffsetX = 5;
            context.shadowOffsetY = 5;
            context.shadowBlur    = 10;
            // <TODO> not working // context.strokeRect(0,0,canvas.width,canvas.height);
            
            var scale = 2.0; // canvas.height / page.getViewport(1.0).height;
            var viewport = page.getViewport(scale);
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            // Render PDF page into canvas context
            var renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            page.render(renderContext);
            
            
            
            // var rect = canvas.getBoundingClientRect();
            // console.log(rect.left);
            // console.log(rect.top);
            
            
            
            // http://stackoverflow.com/questions/16128604/scrollable-canvas-inside-div
            var dragging = false;
            var marginLeft = 0;
            
            canvas.addEventListener('mousedown', function(e) {
                var evt = e || event;
                dragging = true;
                lastX = evt.clientX;
                e.preventDefault();
            }, false);
            
            window.addEventListener('mousemove', function(e) {
                var evt = e || event;
                if (dragging) {
                    var delta = evt.clientX - lastX;
                    lastX = evt.clientX;
                    marginLeft += delta;
                    canvas.style.marginLeft = marginLeft + "px";
                }
                e.preventDefault();
            }, false);
            
            window.addEventListener('mouseup', function() {
                dragging = false;
            }, false);
            
            
            
        });
    });
    
};


