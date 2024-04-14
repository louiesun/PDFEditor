import fitz

# 全局变量

doc=fitz.open();

# 打开PDF文件
def LoadPDF(PDFFile):
    global doc;
    doc.close();
    doc = fitz.open(PDFFile);
    return;
    
# 取svg并传递给前端编辑器，最好先删除注释
def GetDocText(pageNumber):
    global doc;
    pageNumber=int(pageNumber);
    page=doc[pageNumber-1];
    text = page.get_text();
    return text;

# 获取指定页的svg
def GetPage(pageNumber):
    global doc;
    pageNumber=int(pageNumber);
    page = doc[pageNumber-1];
    svg = page.get_svg_image(text_as_path=False);
    return svg;

# 获取缩略图
def GetPixel(pageNumber):
    global doc;
    pageNumber=int(pageNumber);
    page = doc[pageNumber-1];
    pix = page.get_pixmap();
    return pix;

def ClosePDF():
    global doc;
    doc.close();
    doc=0;

def testTextTest():
    text = "A string From Python 3.8";
    return text;

def testNumTest(number):
    return number*2;
    
"""
LoadPDF("C:\\Users\\Dev C\\Desktop\\test.pdf");
print(GetPage(1));
"""
