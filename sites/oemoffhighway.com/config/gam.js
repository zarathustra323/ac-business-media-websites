module.exports = {
  basePath: 'oemoff-highway',
  pathMaps: [
    {
      alias: 'default',
      map: {
        lb1: 'default/lb1',
        'lb-sticky-bottom': 'default/lb1',
        rail1: 'default/rail1',
        rail2: 'default/rail1',
        'infinite-rail': 'default/rail1',
        'infinite-interstitial': 'default/rail1',
        'in-content': 'default/rail1',
        reskin: 'default/reskin',
      },
    },
    {
      alias: 'engines',
      map: {
        lb1: 'engines/lb1',
        'lb-sticky-bottom': 'engines/lb1',
        rail1: 'engines/rail1',
        rail2: 'engines/rail1',
        'infinite-rail': 'engines/rail1',
        'infinite-interstitial': 'engines/rail1',
        'in-content': 'engines/rail1',
        reskin: 'engines/reskin',
      },
    },
    {
      alias: 'drivetrains',
      map: {
        lb1: 'drivetrains/lb1',
        'lb-sticky-bottom': 'drivetrains/lb1',
        rail1: 'drivetrains/rail1',
        rail2: 'drivetrains/rail1',
        'infinite-rail': 'drivetrains/rail1',
        'infinite-interstitial': 'drivetrains/rail1',
        'in-content': 'drivetrains/rail1',
        reskin: 'drivetrains/reskin',
      },
    },
    {
      alias: 'fluid-power',
      map: {
        lb1: 'fluid-power/lb1',
        'lb-sticky-bottom': 'fluid-power/lb1',
        rail1: 'fluid-power/rail1',
        rail2: 'fluid-power/rail1',
        'infinite-rail': 'fluid-power/rail1',
        'infinite-interstitial': 'fluid-power/rail1',
        'in-content': 'fluid-power/rail1',
        reskin: 'fluid-power/reskin',
      },
    },
    {
      alias: 'electronics',
      map: {
        lb1: 'electronics/lb1',
        'lb-sticky-bottom': 'electronics/lb1',
        rail1: 'electronics/rail1',
        rail2: 'electronics/rail1',
        'infinite-rail': 'electronics/rail1',
        'infinite-interstitial': 'electronics/rail1',
        'in-content': 'electronics/rail1',
        reskin: 'electronics/reskin',
      },
    },
    {
      alias: 'operator-cab',
      map: {
        lb1: 'operator-cab/lb1',
        'lb-sticky-bottom': 'operator-cab/lb1',
        rail1: 'operator-cab/rail1',
        rail2: 'operator-cab/rail1',
        'infinite-rail': 'operator-cab/rail1',
        'infinite-interstitial': 'operator-cab/rail1',
        'in-content': 'operator-cab/rail1',
        reskin: 'operator-cab/reskin',
      },
    },
    {
      alias: 'engineering-manufacturing',
      map: {
        lb1: 'engineering-manufacturing/lb1',
        'lb-sticky-bottom': 'engineering-manufacturing/lb1',
        rail1: 'engineering-manufacturing/rail1',
        rail2: 'engineering-manufacturing/rail1',
        'infinite-rail': 'engineering-manufacturing/rail1',
        'infinite-interstitial': 'engineering-manufacturing/rail1',
        'in-content': 'engineering-manufacturing/rail1',
        reskin: 'engineering-manufacturing/reskin',
      },
    },
    {
      alias: 'ifpe-conexpo',
      map: {
        lb1: 'ifpe-conexpo/lb1',
        'lb-sticky-bottom': 'ifpe-conexpo/lb1',
        rail1: 'ifpe-conexpo/rail1',
        rail2: 'ifpe-conexpo/rail1',
        'infinite-rail': 'ifpe-conexpo/rail1',
        'infinite-interstitial': 'ifpe-conexpo/rail1',
        'in-content': 'ifpe-conexpo/rail1',
        reskin: 'ifpe-conexpo/reskin',
      },
    },
    {
      alias: 'minexpo-2021',
      map: {
        lb1: 'minexpo-2021/lb1',
        'lb-sticky-bottom': 'minexpo-2021/lb1',
        rail1: 'minexpo-2021/rail1',
        rail2: 'minexpo-2021/rail1',
        'infinite-rail': 'minexpo-2021/rail1',
        'infinite-interstitial': 'minexpo-2021/rail1',
        'in-content': 'minexpo-2021/rail1',
        reskin: 'minexpo-2021/reskin',
      },
    },
    {
      alias: 'market-analysis/industry-news/mining',
      map: {
        lb1: 'minexpo-2021/lb1',
        'lb-sticky-bottom': 'minexpo-2021/lb1',
        rail1: 'minexpo-2021/rail1',
        rail2: 'minexpo-2021/rail1',
        'infinite-rail': 'minexpo-2021/rail1',
        'infinite-interstitial': 'minexpo-2021/rail1',
        'in-content': 'minexpo-2021/rail1',
        reskin: 'minexpo-2021/reskin',
      },
    },
    {
      alias: 'trends/equipment-launches/mining',
      map: {
        lb1: 'minexpo-2021/lb1',
        'lb-sticky-bottom': 'minexpo-2021/lb1',
        rail1: 'minexpo-2021/rail1',
        rail2: 'minexpo-2021/rail1',
        'infinite-rail': 'minexpo-2021/rail1',
        'infinite-interstitial': 'minexpo-2021/rail1',
        'in-content': 'minexpo-2021/rail1',
        reskin: 'minexpo-2021/reskin',
      },
    },
  ],
  stickyBottomTemplate: {
    size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50]] },
    ],
  },
};
