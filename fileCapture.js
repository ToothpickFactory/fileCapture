angular.app("fileCapture", [])
.directive("fileCapture", function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, ele, attrs) {
            ele.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
					var capture = {preview: loadEvent.target.result, file: ele[0].files};
                    scope.$apply(function () {
                        $parse(attrs.fileCapture)
						.assign(scope, capture)
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
});
