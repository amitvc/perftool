(function(){
    
    var promotionController = function($scope,configService,$log) {
        $scope.promotionSetupData = {
            edit: false
        };
        
        $scope.CHANNEL_TYPES = ["CATALINA_IN_STORE", "LOAD_TO_CARD"];
        $scope.BOOLEAN_TYPES = [true, false];
        $scope.PROMOTION_TYPES = ["StringPrints", "Threshold", "GType", "Transactional"];
        
        if(configService.getModel() != undefined) {
            $scope.setup = configService.getModel();
        }
        
        $scope.editPromotionSetup = function (index) {
            $log.info("Index selected " + index);
            angular.copy($scope.setup.promotionSetup[index], $scope.promotionSetupData);
            $scope.promotionSetupData['index'] = index;
            $scope.promotionSetupData['endDate'] = new Date($scope.setup.promotionSetup[index].endDate);
            $scope.promotionSetupData['startDate'] = new Date($scope.setup.promotionSetup[index].startDate);
            $scope.promotionSetupData.edit = true;
        }
        
        $scope.newPromotionSetup = function () {
            $scope.promotionSetupData = {};
            $scope.promotionSetupData['edit'] = false;
            $scope.promotionSetupData['promotionType'] = $scope.PROMOTION_TYPES[3];
            $scope.promotionSetupData['mediaCapDisabled'] = $scope.BOOLEAN_TYPES[1];
            $scope.promotionSetupData['channelCapDisabled'] = $scope.BOOLEAN_TYPES[1];
            $scope.promotionSetupData['unlimited'] = $scope.BOOLEAN_TYPES[1];
            $scope.promotionSetupData['houseHolded'] = $scope.BOOLEAN_TYPES[1];
            $scope.promotionSetupData['channelType'] = $scope.CHANNEL_TYPES[0];
        }
        
        $scope.deletePromotionData = function (index) {
            $log.info("Deleting promotion setup");
            $scope.promotionSetupData = {};
            configService.clearModel($scope.promotionSetupData);
            $scope.setup.promotionSetup.splice(index, 1);
        }
        
        $scope.savePromotionSetup = function () {
            if ($scope.promotionSetupData.edit == false) {
                if ($scope.promotionSetupData.rank == undefined) {
                    $scope.promotionSetupData.rank = 256;
                }

                $scope.setup.promotionSetup.push({
                    'awardId': $scope.promotionSetupData.awardId,
                    'rank': $scope.promotionSetupData.rank,
                    'mediaId': $scope.promotionSetupData.mediaId,
                    'channelMediaId': $scope.promotionSetupData.channelMediaId,
                    'awardCap': $scope.promotionSetupData.awardCap,
                    'awardVariance': $scope.promotionSetupData.awardVariance,
                    'controlPercentage': $scope.promotionSetupData.controlPercentage,
                    'randomValue': $scope.promotionSetupData.randomValue,
                    'mediaCap': $scope.promotionSetupData.mediaCap,
                    'campaignId': $scope.promotionSetupData.campaignId,
                    'mediaVariance': $scope.promotionSetupData.mediaVariance,
                    'mediaCapDisabled': $scope.promotionSetupData.mediaCapDisabled,
                    'channelMediaCap': $scope.promotionSetupData.channelMediaCap,
                    'channelMediaVariance': $scope.promotionSetupData.channelMediaVariance,
                    'channelCapDisabled': $scope.promotionSetupData.channelCapDisabled,
                    'unlimited': $scope.promotionSetupData.unlimited,
                    'thresholdSequence': $scope.promotionSetupData.thresholdSequence,
                    'promotionType': $scope.promotionSetupData.promotionType,
                    'houseHolded': $scope.promotionSetupData.houseHolded,
                    'channelType': $scope.promotionSetupData.channelType,
                    'consumerCap': $scope.promotionSetupData.consumerCap,
                    'startDate': $scope.promotionSetupData.startDate,
                    'endDate': $scope.promotionSetupData.endDate,
                    'cardRangeId': $scope.promotionSetupData.cardRangeId,
                    'programSetupId': $scope.promotionSetupData.programSetupId
                });

            } else {
                angular.copy($scope.promotionSetupData, $scope.setup.promotionSetup[$scope.promotionSetupData.index]);
            }
            configService.clearModel($scope.promotionSetupData);
        };
        
        $scope.clonePromotion = function (index) {
            $log.info("Cloning promotion setup " + index);
            $scope.promotionSetupData = {};
            var temp = {};
            angular.copy($scope.setup.promotionSetup[index], temp);
            $scope.setup.promotionSetup.splice(index + 1, 0, temp);
            angular.copy($scope.setup.promotionSetup[index + 1], $scope.promotionSetupData);
            $scope.promotionSetupData['index'] = index + 1;
            $scope.promotionSetupData['edit'] = true;
        }
        
        $scope.$on("destroy", function() {
            configService.setModel($scope.setup);
        });

    }
    
    angular.module("perftool").controller('promotionController', promotionController);
    promotionController.$inject = ['$scope', 'configService', '$log'];
})();