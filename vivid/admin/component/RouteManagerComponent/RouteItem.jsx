var React = require('react');
var _ = require('underscore');


var RouteItem = React.createClass({
    render: function() {

        if (this.props.route.isVisible) {

            var dataItems = function(dataItem) {
                return (
                    <div>datasource: {dataItem.datasource}</div>
                )
            };

            var componentItems = function(componentItem) {
                return (
                    <div>

                    </div>
                )
            };

            return (
                <div className="routeItemContainer">
                    <div className="routeName">
                        {this.props.route.name}
                    </div>
                    <div className="right-arrow"></div>
                    <div className="station">
                        <div>Match urls:</div>
                        <div className="stationItem">
                            {this.props.route.url}
                        </div>
                    </div>
                    <div className="right-arrow"></div>
                    <div className="station">
                        <div>Gather data</div>
                        <div>{this.props.route.resolve.map(dataItems)}</div>
                    </div>
                    <div className="right-arrow"></div>
                    <div className="station">
                        <div>Render Page</div>
                    </div>
                    <div className="right-arrow"></div>
                </div>
            );
        } else {
            return null;
        }
    }
});

module.exports = RouteItem;