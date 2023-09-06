//====================================================================================================
//伪造HTMLCanvasElement
var HTMLCanvasElement = function HTMLCanvasElement() {
    //容易被检测到-堆栈
    throw new TypeError("Illegal constructor");
};
//保护HTMLCanvasElement
Frame.safe(HTMLCanvasElement);
//原型链指向
Frame.inherits(HTMLCanvasElement, HTMLElement)
//设置原型名
Frame.rename(HTMLCanvasElement, 'HTMLCanvasElement');
//////////////////////////////////////////////////////////////////////////////////////////////////////
//创建canvas
Frame.memory.htmlelements["canvas"] = function () {
    var canvas = new (function () {
    });
    canvas=Frame.proxy_(canvas);
    //////////////////////////////////////////////////////////////////////////////////////////////////
    canvas.getContext = function getContext() {
        if (arguments[0] == '2d') {
            return CanvasRenderingContext2D;
        }
        if (arguments[0] == 'webgl' || arguments[0] == 'experimental-webgl') {
            canvas.canvas = canvas;
            canvas.drawingBufferColorSpace = "srgb";
            canvas.drawingBufferHeight = 150;
            canvas.drawingBufferWidth = 300;
            canvas.unpackColorSpace = "srgb";
            canvas.getExtension = function (arg) {
                return {}
            };
            canvas.getParameter = function (arg) {
                if (arg === undefined) {
                    throw new Error("Uncaught TypeError: Failed to execute 'getParameter' on 'WebGLRenderingContext': 1 argument required, but only 0 present.")
                }
            };
            return canvas;
        }
    };
    canvas.toDataURL = function toDataURL() {
        // 实际为canvas画布填充了图片
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAADkdJREFUeF7t3HtwVOUZx/HnJIYkA8ZwUXAAuQkNcgsIBBxrkavFWykKtVRqgeyGcQZQW7UU9Q+xXuoUpK2wS8ERaxXlVqeASrAISolcFCWllZsFglysKAgJhOR0zslu3JAFDA/zkIXv/qO45znPez7v7m/e8+5BR3ghgAACCSLgJMg4GeY5FHAD4p7D0yXMqZyw8HlPmNmKP1AmMMEn8GyGT2CdjRo1tUGAwKoNs2A8BgLLGJx250yAwDpnlIlzIgIrceaKkVYVILAuwk8EgXURTvoFcskE1gUykTW5DAKrJlocW5sECKzaNBtGYyGwjKBpc84FCKxzTlr7T0hg1f45YoTxBQisi/CTQWBdhJN+gVwygXWBTGRNLoPAqokWx9YmAQKrNs2G0VgILCNo2pxzAQLrnJPW/hMSWLV/jhghe1h8BiICBBYfhUQVYIWVqDOnGDeBpcCj9LwKEFjnlf/8NCewzo87XfUC3wbWmJmNJal8hbjOBJkZeKvKqe+eU1fSSl4Txx1craXr3FTt+FONKzc8XRw3L/L2F+K4/SWUt7HycO99kUVVzpcbHiSO+2bcmorjRWYGxsZteaZ+0aLTXfu3/cdLODhNT37+z0Bgnf85YARnJ1CzwBKZFidM/lIteOKNpSJcrpKStGHy0sgjUhEEFbXlSU3EcaeK63zolzpuVylP6iPJZU3EdeaK4w73g62iZqr/3p9z98npAut0/WJD0usXDbaTwzca1CI7xXH7VPY9O+taU0Vg1ZqpYCA1FKgWWG2vLni6742zB+4uumbD4iXjHxLXmSclab/0VliXN97xwpAhT/Z3XGnq9TlxIiV1/4FW3Rs0KPokrc6RP4R6yLzKL3/FQP7tf8m9V8zqLbBWnnHd5I7797W8tk5q8ecNGu0ZF3p+5n8ix6wIBAKHHZEPQuFwv+gKKrhW7ih3k0d5NXXrHdxy6WVfTgxND9/lve8df6IsJWX2rD+1E8dtLWXJd0py2evR1WLcft1kpX9uLwRFxnl10WsXkQX+tQRndBHXeV7Kk8a2y3p/Sc8ef9tdt+7B10Ld5fc1dK5VhxNYtWo6GEwNBOIGVu/e84atXn3n9Vu35tzpr6giK43KwCqX/Eg4eV/2HwUDgeWuyF2rVw8v2rSpX5vKVVQgNE5cZ1Dln71wWSvPSJJkfLo5Z/KKd0eH+t44+8OWrT/Mzl+e26JTh3deTE4qDboie65o/Fnh3s/b3v7RxoGzbrl1ar6US54kyQwvpLp0frt1r17z/rdw4UR3/4GWh0aNvrdk27Yet7274p63T749jNfv6rZr2jvJ8pwfko47W1zn15JUPnfo0Cc+adRwZ7q48qJ/fRXjbz96QuA3ez7tuKq0NO14m1brNieJTJreQ7bXwLlWHUpg1arpYDA1EKgWWC2ab5qdlbVq0leHGs8vGP3WqOAGuaGsNPn+LVtzOq1Zc0frnj0XSVFRlmzffm1FG9dZMuT2px/KbFg0admyQO/duzoGvJDzgsJxpH3FMXLY+5J7/1ouMrm4OGPJnJee9VdHfX4wK9iufcEkx5VPvZXL2LXS2jumtCxln79iEpkWCAT8lVa4hzzohUjdugezR/zs4eMFq+9otfHjgdv7Dwj3Ki2tk/Hum3mdRz88MjW5RH7rlEuGIxJ2RQKn7BcOnfDHV540t13W++uzu7y5sX7m3q/9FVZo5qroqjA4NlB85HDmAytW3JPdt+/swvS0Q7P9QEvQF4GVoBPHsGP+H9eRjeeMjANZOT0XHKtTp2RSs6v+9YFbJuNLijMWegFTbYVVccuU37fPC6ErrtzW9NVXJvf29puCuXn9XEfalaXJxFkd5MvgOrm/8s9PzTnmb+B7r5K0YTEBk58ksqHckUckSV4oPZ4ypHBT30HbP+v2aOQ21A+06KrHuw3cvqP7gPz83OycnPnSqOGu5U3abh7mhZWUyyE/3LzXt/tQVfoV7bpm6+LFE7pJSVpu35umd3Cd8reOHmkwOTt7qZfEC0Lh8GH/VrEkbVhw/Mhg6YmU5l6A3nzzlNSmTTdvqDw/HyIEEDATqLbCatp08+u9e80fvGNHt9RuXf++OSm5bE3ouTmheHtY3igPHGjRyftnevrXa+fPfyQ7q/37E3J6LBhRuQ908qXEbJyPvi+31A8YEYmGW+XhkaC5LHPvquE/ebSl8+1tqP/LYDAY2LJte/e785cF9gwb/tjBoqKsHza/atMbGRkHjlU5V5x+ZaUpKa/MfeKyo0czHvc28+9emfloYeEN9x4+3Oghb/+uckXmuIMzMg5Ij+5vyI7Psv1VZbNmhTsHDgitT0k9NjUU3Qczmy4aIXBxC8Tdw/r+9S/ftv9AqwHp6Ye2+RviU+asrxJY0fDw7HLD0zt2XF7aM2dR6/feuyu7fuaeqdnZb3fz95vifaEj+1rRW8G4YRWdk9zw9Lr1vkz1bv/8wJo2Z2lkdTYtGAx0iATWGm+19cUXLYaVnbgkvWHDoimzryt5qnJa4/RbuvTev+7a2Xm+iDS68sot0qrVBlm//hZJTT0qXhgVF1/66uIl48f4q8UxeW3dJOnvh+C0Gc3TUo8uv+3WZwrq19+7PNE33y/ujz5Xn4gCp/yVcM+erMO7dl8zokOHd5YW7f7efd4G+SluCf3HDgJj8kYUFbXvVljYp+6A/uFdSSllfwxND6dXeQwhRsj71U9EfnzaDezgjC5pdY7MGzr08Y/q1fvqn6FQuDB6vkAw9wH/lnBZwA+s48fTm6xcOfLGrl2X7G90xa77Tg7LeP1GF0qD5GJ5bP/+Nv9YtOjBJ6O/En708aCSgjVDG8fsr/m/isauKC9v9N/Vib75nogfWMZ8cQucMrC8W7qFCycO6dFzUZ8GmbtDL738bE5q2jeD42y6+w+ORjbZ9y5cMPHaTp3zfxq5har+cGhkxTPqF+NWXZJa0rLarWCcW8icXvP8B0cLCob65xs9Lm+XdysZ3XT3Ast7PxwOL+993dyFrVutX5x2+VdBb/8ssuc1KF4/7wcFb4+urCzl0n372vTOzNxXmJr6zSHv34uLM/KvbvfBlMpfJ2Meg2jabPPcfn1nrktP+2ZGIm++X9wffa4+EQWq/dWc6K900T0ob2XiPbLgPQZwIlU2RX6Bq3isIfLyvvixX+wqm+zepvt3WU2dRq/a+U86n//oQuRXxMrxO7Kuprds1a499scCL/xiXrE9E3HiGTMCiShwxsDyLir6LJO48jtx5FfRB0erXHD02aXIf4x9rMF15bj/3FPMntbJoXYmPD/0HPm5d9zJ5zs5PGJDNtrzu/SLDSz/F0uRyXKK4IvX40zXwPsIIKAT4C8/6/yoRgABQwECyxCbVgggoBMgsHR+VCOAgKEAgWWITSsEENAJEFg6P6oRQMBQgMAyxKYVAgjoBAgsnR/VCCBgKEBgGWLTCgEEdAIEls6PagQQMBQgsAyxaYUAAjoBAkvnRzUCCBgKEFiG2LRCAAGdAIGl86MaAQQMBQgsQ2xaIYCAToDA0vlRjQAChgIEliE2rRBAQCdAYOn8qEYAAUMBAssQm1YIIKATILB0flQjgIChAIFliE0rBBDQCRBYOj+qEUDAUIDAMsSmFQII6AQILJ0f1QggYChAYBli0woBBHQCBJbOj2oEEDAUILAMsWmFAAI6AQJL50c1AggYChBYhti0QgABnQCBpfOjGgEEDAUILENsWiGAgE6AwNL5UY0AAoYCBJYhNq0QQEAnQGDp/KhGAAFDAQLLEJtWCCCgEyCwdH5UI4CAoQCBZYhNKwQQ0AkQWDo/qhFAwFCAwDLEphUCCOgECCydH9UIIGAoQGAZYtMKAQR0AgSWzo9qBBAwFCCwDLFphQACOgECS+dHNQIIGAoQWIbYtEIAAZ0AgaXzoxoBBAwFCCxDbFohgIBOgMDS+VGNAAKGAgSWITatEEBAJ0Bg6fyoRgABQwECyxCbVgggoBMgsHR+VCOAgKEAgWWITSsEENAJEFg6P6oRQMBQgMAyxKYVAgjoBAgsnR/VCCBgKEBgGWLTCgEEdAIEls6PagQQMBQgsAyxaYUAAjoBAkvnRzUCCBgKEFiG2LRCAAGdAIGl86MaAQQMBQgsQ2xaIYCAToDA0vlRjQAChgIEliE2rRBAQCdAYOn8qEYAAUMBAssQm1YIIKATILB0flQjgIChAIFliE0rBBDQCRBYOj+qEUDAUIDAMsSmFQII6AQILJ0f1QggYChAYBli0woBBHQCBJbOj2oEEDAUILAMsWmFAAI6AQJL50c1AggYChBYhti0QgABnQCBpfOjGgEEDAUILENsWiGAgE6AwNL5UY0AAoYCBJYhNq0QQEAnQGDp/KhGAAFDAQLLEJtWCCCgEyCwdH5UI4CAoQCBZYhNKwQQ0AkQWDo/qhFAwFCAwDLEphUCCOgECCydH9UIIGAoQGAZYtMKAQR0AgSWzo9qBBAwFCCwDLFphQACOgECS+dHNQIIGAoQWIbYtEIAAZ0AgaXzoxoBBAwFCCxDbFohgIBOgMDS+VGNAAKGAgSWITatEEBAJ0Bg6fyoRgABQwECyxCbVgggoBMgsHR+VCOAgKEAgWWITSsEENAJEFg6P6oRQMBQgMAyxKYVAgjoBAgsnR/VCCBgKEBgGWLTCgEEdAIEls6PagQQMBQgsAyxaYUAAjoBAkvnRzUCCBgKEFiG2LRCAAGdAIGl86MaAQQMBQgsQ2xaIYCAToDA0vlRjQAChgIEliE2rRBAQCdAYOn8qEYAAUMBAssQm1YIIKATILB0flQjgIChAIFliE0rBBDQCRBYOj+qEUDAUIDAMsSmFQII6AQILJ0f1QggYChAYBli0woBBHQCBJbOj2oEEDAUILAMsWmFAAI6gf8DOCrQ04sCaucAAAAASUVORK5CYII="
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////
    canvas.__proto__ = HTMLCanvasElement.prototype;
    return canvas;
}