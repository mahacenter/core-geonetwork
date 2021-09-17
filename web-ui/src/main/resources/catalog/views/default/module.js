/*
 * Copyright (C) 2001-2016 Food and Agriculture Organization of the
 * United Nations (FAO-UN), United Nations World Food Programme (WFP)
 * and United Nations Environment Programme (UNEP)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or (at
 * your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301, USA
 *
 * Contact: Jeroen Ticheler - FAO - Viale delle Terme di Caracalla 2,
 * Rome - Italy. email: geonetwork@osgeo.org
 */

(function() {

  goog.provide('gn_search_default');




  goog.require('cookie_warning');
  goog.require('gn_mdactions_directive');
  goog.require('gn_related_directive');
  goog.require('gn_search');
  goog.require('gn_gridrelated_directive');
  goog.require('gn_search_default_config');
  goog.require('gn_search_default_directive');

  var module = angular.module('gn_search_default',
      ['gn_search', 'gn_search_default_config',
       'gn_search_default_directive', 'gn_related_directive',
       'cookie_warning', 'gn_mdactions_directive', 'gn_gridrelated_directive']);

  var GHANA_REGIONS = {
    "Ahafo": [
      "Asunafo North",
      "Asunafo South",
      "Asutifi North",
      "Asutifi South",
      "Tano North",
      "Tano South"
    ],
    "Ashanti": [
      "Adansi Akrofuom",
      "Adansi Asokwa",
      "Adansi North",
      "Adansi South",
      "Afigya Kwabre North",
      "Afigya Kwabre South",
      "Ahafo Ano North",
      "Ahafo Ano South East",
      "Ahafo Ano South West",
      "Amansie Central",
      "Amansie South",
      "Amansie West",
      "Asante Akim Central",
      "Asante Akim North",
      "Asante Akim South",
      "Asante Mampong",
      "Asokore Mampong",
      "Asokwa",
      "Atwima Kwanwoma",
      "Atwima Mponua",
      "Atwima Nwabiagya",
      "Atwima Nwabiagya North",
      "Bekwai",
      "Bosome Freho",
      "Bosomtwe",
      "Ejisu",
      "Ejura-Sekyedumase",
      "Juaben",
      "Kumasi",
      "Kwabre East",
      "Kwadaso",
      "Obuasi",
      "Obuasi East",
      "Offinso",
      "Offinso North",
      "Oforikrom",
      "Old Tafo",
      "Sekyere Afram Plains",
      "Sekyere Central",
      "Sekyere East",
      "Sekyere Kumawu",
      "Sekyere South",
      "Suame"
    ],
    "Bono": [
      "Banda",
      "Berekum",
      "Berekum West",
      "Dormaa East",
      "Dormaa Municipal",
      "Dormaa West",
      "Jaman North",
      "Jaman South",
      "Sunyani Municipal",
      "Sunyani West",
      "Tain",
      "Wenchi"
    ],
    "Bono East": [
      "Atebubu-Amanten",
      "Kintampo North",
      "Kintampo South",
      "Nkoranza North",
      "Nkoranza South",
      "Pru",
      "Pru West",
      "Sene East",
      "Sene West",
      "Techiman Municipal",
      "Techiman North"
    ],
    "Central": [
      "Abura-Asebu-Kwamankese",
      "Agona East",
      "Agona West",
      "Ajumako-Enyan-Essiam",
      "Asikuma-Odoben-Brakwa",
      "Assin Foso",
      "Assin North",
      "Assin South",
      "Awutu Senya",
      "Awutu Senya East",
      "Cape Coast",
      "Efutu",
      "Ekumfi",
      "Gomoa Central",
      "Gomoa East",
      "Gomoa West",
      "Komenda-Edna-Eguafo-Abirem",
      "Mfantsiman",
      "Twifo-Ati-Mokwa",
      "Twifo-Hemang Lower Denkyira",
      "Upper Denkyira East",
      "Upper Denkyira West"
    ],
    "Eastern": [
      "Abuakwa North",
      "Achiase",
      "Afram Plains South",
      "Akwapim North",
      "Akwapim South",
      "Akyemansa",
      "Asene Manso Akroso",
      "Asuogyaman",
      "Atiwa East",
      "Atiwa West",
      "Ayensuano",
      "Birim Central",
      "Birim North",
      "Birim South",
      "Denkyembour",
      "East Akim - Abuakwa South",
      "Fanteakwa North",
      "Fanteakwa South",
      "Kwaebibirem",
      "Kwahu East",
      "Kwahu North",
      "Kwahu South",
      "Kwahu West",
      "Lower-Manya Krobo",
      "New Juaben North",
      "New Juaben South",
      "Nsawam-Adoagyiri",
      "Okere",
      "Suhum",
      "Upper Manya-Krobo",
      "Upper West Akim",
      "West Akim",
      "Yilo-Krobo"
    ],
    "Greater Accra": [
      "Ablekuma Central",
      "Ablekuma North",
      "Ablekuma West",
      "Accra Metro",
      "Ada East",
      "Ada West",
      "Adentan",
      "Ashaiman",
      "Ayawaso Central",
      "Ayawaso East",
      "Ayawaso North",
      "Ayawaso West",
      "Ga Central",
      "Ga East",
      "Ga North",
      "Ga South",
      "Ga West",
      "Korle-Klottey",
      "Kpone-Katamanso",
      "Krowor",
      "La-Dade-Kotopon",
      "La-Nkwantanang-Madina",
      "Ledzokuku",
      "Ningo Prampram",
      "Okai Koi North",
      "Shai-Osudoku",
      "Tema",
      "Tema West",
      "Weija-Gbawe"
    ],
    "North East": [
      "Bunkpurugu -Nakpanduri",
      "Chereponi",
      "East Mamprusi",
      "Mamprugu-Moagduri",
      "West Mamprusi",
      "Yunyoo-Nasuan"
    ],
    "Northern": [
      "Gushiegu",
      "Karaga",
      "Kpandai",
      "Kumbungu",
      "Mion",
      "Nanton",
      "Nanumba North",
      "Nanumba South",
      "Saboba",
      "Sagnarigu",
      "Savelugu",
      "Tamale",
      "Tatale-Sangule",
      "Tolon",
      "Yendi",
      "Zabzugu"
    ],
    "Oti": [
      "Biakoye",
      "Jasikan",
      "Kadjebi",
      "Krachi East",
      "Krachi Nchumuru",
      "Krachi West",
      "Nkwanta North",
      "Nkwanta South"
    ],
    "Savannah": [
      "Bole",
      "Central Gonja",
      "East Gonja",
      "North Gonja",
      "North-East Gonja",
      "Sawla-Tuna-Kalba",
      "West Gonja"
    ],
    "Upper East": [
      "Bawku Municipal",
      "Bawku West",
      "Binduri",
      "Bolgatanga East",
      "Bolgatanga Municipal",
      "Bongo",
      "Builsa North",
      "Builsa South",
      "Garu",
      "Kasena-Nankana",
      "Kasena-Nankana West",
      "Nabdam",
      "Pusiga",
      "Talensi",
      "Tempane"
    ],
    "Upper West": [
      "Daffiama-Bussie-Issa",
      "Jirapa",
      "Lambussie",
      "Lawra",
      "Nadowli-Kaleo",
      "Nandom",
      "Sissala East",
      "Sissala West",
      "Wa East",
      "Wa Municipal",
      "Wa West"
    ],
    "Volta": [
      "Adaklu",
      "Afadjato South",
      "Agortime-Ziope",
      "Akatsi North",
      "Akatsi South",
      "Anloga",
      "Central Tongu",
      "Ho",
      "Ho West",
      "Hohoe",
      "Keta",
      "Ketu North",
      "Ketu South",
      "Kpando",
      "North Dayi",
      "North Tongu",
      "South Dayi",
      "South Tongu"
    ],
    "Western": [
      "Ahanta West",
      "Effia-Kwesimintsim",
      "Ellembelle",
      "Jomoro",
      "Mpohor",
      "Nzema East",
      "Prestea-Huni Valley",
      "Sekondi-Takoradi",
      "Shama",
      "Tarkwa-Nsuaem",
      "Wassa Amenfi Central",
      "Wassa Amenfi East",
      "Wassa Amenfi West",
      "Wassa East"
    ],
    "Western North": [
      "Aowin",
      "Bia East",
      "Bia West",
      "Bibiani-Anhwiaso-Bekwai",
      "Bodi",
      "Juaboso",
      "Sefwi-Akontombra",
      "Sefwi-Wiawso",
      "Suaman"
    ]
  };

  module.controller('gnsSearchPopularController', [
    '$scope', 'gnSearchSettings',
    function($scope, gnSearchSettings) {
      $scope.searchObj = {
        permalink: false,
        internal: true,
        filters: gnSearchSettings.filters,
        params: {
          sortBy: 'popularity',
          from: 1,
          to: 12
        }
      };
    }]);


  module.controller('gnsSearchLatestController', [
    '$scope', 'gnSearchSettings',
    function($scope, gnSearchSettings) {
      $scope.searchObj = {
        permalink: false,
        internal: true,
        filters: gnSearchSettings.filters,
        params: {
          sortBy: 'changeDate',
          from: 1,
          to: 12
        }
      };
    }]);


  module.controller('gnsSearchTopEntriesController', [
    '$scope', 'gnGlobalSettings',
    function($scope, gnGlobalSettings) {
      $scope.resultTemplate = '../../catalog/components/' +
        'search/resultsview/partials/viewtemplates/grid4maps.html';
      $scope.searchObj = {
        permalink: false,
        internal: true,
        filters: {
          'type': 'interactiveMap'
        },
        params: {
          sortBy: 'changeDate',
          from: 1,
          to: 30
        }
      };
    }]);

  module.controller('gnsMahaSearchController', [
    '$scope', 'gnGlobalSettings',
    function($scope, gnGlobalSettings) {
      var _cat = '';
      var _region = '';
      var _types = {
        'Base map': [
          'District basemap',
          'District basemap 1km',
          'District basemap 3km',
          'District basemap 5km',
          'Sub-District basemap'
        ],
        'Smart map': [
          'Sub-District smartmap',
          'District smartmap'
        ],
        'Coverage map': [
          'District map displayed at Sub-District level',
          'Regional map displayed at Sub-District level',
          'Regional map displayed at District level'
        ]
      };

      $scope.antigens = [
        'BCG',
        'IPV',
        'Men A',
        'MR-1',
        'MR-2',
        'OPV 3',
        'PCV 3',
        'Penta 3',
        'Rota 2',
        'Yellow Fever'
      ];

      $scope.regions = Object.keys(GHANA_REGIONS);

      $scope.allowAntigen = function () {
        // return _cat == 'Coverage map';
        return false;
      };

      $scope.isDefined = function (thing) {
        return thing && thing !== '';
      };

      $scope.hasCategory = function () {
        return $scope.isDefined(_cat);
      };

      $scope.hasType = function () {
        return $scope.isDefined($scope.type);
      };

      $scope.hasScale = function () {
        return $scope.isDefined($scope.scale);
      };

      $scope.hasDistrict = function () {
        return $scope.isDefined($scope.district);
      };

      $scope.category = function (arg) {
        if (!arg) {
          return _cat;
        }
        _cat = arg;
        $scope.antigen = _cat === 'Coverage map' ? 'BCG' : null;
        $scope.type = '';
        console.log('set category', $scope.antigen);
      };

      $scope.region = function (arg) {
        if (!arg) {
          return _region;
        }
        _region = arg;
        $scope.district = '';
      };

      $scope.types = function () {
        return _types[_cat];
      };

      $scope.districts = function () {
        var districts = GHANA_REGIONS[$scope.region()];
        console.log('REturning districts of region', $scope.region(), districts);
        return districts || [];
      };

      $scope.facetQuery = function () {
        console.log('query', $scope.allowAntigen(), $scope.antigen);
        var base = 'format%2F' + $scope.scale + '%26type%2F' + $scope.type + '%26keyword%2F' + $scope.district;
        if ($scope.allowAntigen()) {
          return base + '%26keyword%2F' + $scope.antigen;
        }
        return base;
      };
    }]);


  module.controller('gnsDefault', [
    '$scope',
    '$location',
    '$filter',
    'suggestService',
    '$http',
    '$translate',
    'gnUtilityService',
    'gnSearchSettings',
    'gnViewerSettings',
    'gnMap',
    'gnMdView',
    'gnMdViewObj',
    'gnWmsQueue',
    'gnSearchLocation',
    'gnOwsContextService',
    'hotkeys',
    'gnGlobalSettings',
    'gnExternalViewer',
    function($scope, $location, $filter,
             suggestService, $http, $translate,
             gnUtilityService, gnSearchSettings, gnViewerSettings,
             gnMap, gnMdView, mdView, gnWmsQueue,
             gnSearchLocation, gnOwsContextService,
             hotkeys, gnGlobalSettings, gnExternalViewer) {

      var viewerMap = gnSearchSettings.viewerMap;
      var searchMap = gnSearchSettings.searchMap;


      $scope.modelOptions = angular.copy(gnGlobalSettings.modelOptions);
      $scope.modelOptionsForm = angular.copy(gnGlobalSettings.modelOptions);
      $scope.isFilterTagsDisplayedInSearch = gnGlobalSettings.gnCfg.mods.search.isFilterTagsDisplayedInSearch;
      $scope.gnWmsQueue = gnWmsQueue;
      $scope.$location = $location;
      $scope.activeTab = '/home';
      $scope.formatter = gnGlobalSettings.gnCfg.mods.search.formatter;
      $scope.listOfResultTemplate = gnGlobalSettings.gnCfg.mods.search.resultViewTpls;
      $scope.resultTemplate = gnSearchSettings.resultTemplate;
      $scope.advandedSearchTemplate = gnSearchSettings.advancedSearchTemplate;
      $scope.facetsSummaryType = gnSearchSettings.facetsSummaryType;
      $scope.facetConfig = gnSearchSettings.facetConfig;
      $scope.facetTabField = gnSearchSettings.facetTabField;
      $scope.location = gnSearchLocation;
      $scope.fluidLayout = gnGlobalSettings.gnCfg.mods.home.fluidLayout;
      $scope.fluidEditorLayout = gnGlobalSettings.gnCfg.mods.editor.fluidEditorLayout;
      $scope.fluidHeaderLayout = gnGlobalSettings.gnCfg.mods.header.fluidHeaderLayout;
      $scope.showGNName = gnGlobalSettings.gnCfg.mods.header.showGNName;
      $scope.mapFilterCollapsed = gnGlobalSettings.gnCfg.mods.search.mapFilterCollapsed;
      $scope.toggleMap = function () {
        $scope.mapFilterCollapsed = !$scope.mapFilterCollapsed;
      };
      hotkeys.bindTo($scope)
        .add({
            combo: 'h',
            description: $translate.instant('hotkeyHome'),
            callback: function(event) {
              $location.path('/home');
            }
          }).add({
            combo: 't',
            description: $translate.instant('hotkeyFocusToSearch'),
            callback: function(event) {
              event.preventDefault();
              var anyField = $('#gn-any-field');
              if (anyField) {
                gnUtilityService.scrollTo();
                $location.path('/search');
                anyField.focus();
              }
            }
          }).add({
            combo: 'enter',
            description: $translate.instant('hotkeySearchTheCatalog'),
            allowIn: 'INPUT',
            callback: function() {
              $location.search('tab=search');
            }
            //}).add({
            //  combo: 'r',
            //  description: $translate.instant('hotkeyResetSearch'),
            //  allowIn: 'INPUT',
            //  callback: function () {
            //    $scope.resetSearch();
            //  }
          }).add({
            combo: 'm',
            description: $translate.instant('hotkeyMap'),
            callback: function(event) {
              $location.path('/map');
            }
          });


      // TODO: Previous record should be stored on the client side
      $scope.mdView = mdView;
      gnMdView.initMdView();


      $scope.goToSearch = function (any) {
        $location.path('/search').search({'any': any});
      };
      $scope.canEdit = function(record) {
        // TODO: take catalog config for harvested records
        if (record && record['geonet:info'] &&
            record['geonet:info'].edit == 'true') {
          return true;
        }
        return false;
      };
      $scope.closeRecord = function() {
        gnMdView.removeLocationUuid();
      };
      $scope.nextPage = function() {
        $scope.$broadcast('nextPage');
      };
      $scope.previousPage = function() {
        $scope.$broadcast('previousPage');
      };

      /**
       * Toggle the list types on the homepage
       * @param  {String} type Type of list selected
       */
      $scope.toggleListType = function(type) {
        $scope.type = type;
      };

      $scope.infoTabs = {
        lastRecords: {
          title: 'lastRecords',
          titleInfo: '',
          active: true
        },
        preferredRecords: {
          title: 'preferredRecords',
          titleInfo: '',
          active: false
        }};

      // Set the default browse mode for the home page
      $scope.$watch('searchInfo', function (n, o) {
        if (angular.isDefined($scope.searchInfo.facet)) {
          if ($scope.searchInfo.facet['inspireThemes'].length > 0) {
            $scope.browse = 'inspire';
          } else if ($scope.searchInfo.facet['topicCats'].length > 0) {
            $scope.browse = 'topics';
          //} else if ($scope.searchInfo.facet['categories'].length > 0) {
          //  $scope.browse = 'cat';
          }
        }
      });

      $scope.$on('layerAddedFromContext', function(e,l) {
        var md = l.get('md');
        if(md) {
          var linkGroup = md.getLinkGroup(l);
          gnMap.feedLayerWithRelated(l,linkGroup);
        }
      });

      $scope.resultviewFns = {
        addMdLayerToMap: function (link, md) {
          var config = {
            uuid: md ? md.getUuid() : null,
            type:
              link.protocol.indexOf('WMTS') > -1 ? 'wmts' :
                ((link.protocol == 'ESRI:REST') || (link.protocol.startsWith('ESRI REST')) ? 'esrirest' : 'wms'),
            url: $filter('gnLocalized')(link.url) || link.url
          };

          var title = link.title;
          var name = link.name;
          if (angular.isObject(link.title)) {
            title = $filter('gnLocalized')(link.title);
          }
          if (angular.isObject(link.name)) {
            name = $filter('gnLocalized')(link.name);
          }

          if (name && name !== '') {
            config.name = name;
            config.group = link.group;
            // Related service return a property title for the name
          } else if (title) {
            config.name = title;
          }

          // if an external viewer is defined, use it here
          if (gnExternalViewer.isEnabled()) {
            gnExternalViewer.viewService({
              id: md ? md.getId() : null,
              uuid: config.uuid
            }, {
              type: config.type,
              url: config.url,
              name: config.name,
              title: title
            });
            return;
          }

          // This is probably only a service
          // Open the add service layer tab
          $location.path('map').search({
            add: encodeURIComponent(angular.toJson([config]))});
          return;
      },
        addAllMdLayersToMap: function (layers, md) {
          angular.forEach(layers, function (layer) {
            $scope.resultviewFns.addMdLayerToMap(layer, md);
          });
        },
        loadMap: function (map, md) {
          gnOwsContextService.loadContextFromUrl(map.url, viewerMap);
        }
      };

      // Share map loading functions
      gnViewerSettings.resultviewFns = $scope.resultviewFns;


      // Manage route at start and on $location change
      // depending on configuration
      if (!$location.path()) {
        var m = gnGlobalSettings.gnCfg.mods;
        $location.path(
          m.home.enabled ? '/home' :
          m.search.enabled ? '/search' :
          m.map.enabled ? '/map' : 'home'
        );
      }
      var setActiveTab = function() {
        $scope.activeTab = $location.path().
        match(/^(\/[a-zA-Z0-9]*)($|\/.*)/)[1];
      };

      setActiveTab();
      $scope.$on('$locationChangeSuccess', setActiveTab);

      var sortConfig = gnSearchSettings.sortBy.split('#');
      angular.extend($scope.searchObj, {
        advancedMode: false,
        from: 1,
        to: 30,
        selectionBucket: 's101',
        viewerMap: viewerMap,
        searchMap: searchMap,
        mapfieldOption: {
          relations: ['within_bbox'],
          autoTriggerSearch: true
        },
        hitsperpageValues: gnSearchSettings.hitsperpageValues,
        filters: gnSearchSettings.filters,
        defaultParams: {
          'facet.q': '',
          resultType: gnSearchSettings.facetsSummaryType || 'details',
          sortBy: sortConfig[0] || 'relevance',
          sortOrder: sortConfig[1] || ''
        },
        params: {
          'facet.q': gnSearchSettings.defaultSearchString || '',
          resultType: gnSearchSettings.facetsSummaryType || 'details',
          sortBy: sortConfig[0] || 'relevance',
          sortOrder: sortConfig[1] || ''
        },
        sortbyValues: gnSearchSettings.sortbyValues
      });
    }]);
})();
