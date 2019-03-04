// 默认 tooltip
const TOOLTIP = {
  show: true,
  trigger: 'axis',
  borderColor: '#DDDEE1',
  borderWidth: 1,
  backgroundColor: 'rgba(255,255,255,0.95)',
  textStyle: {
    color: '#868da0',
    fontSize: 14,
  },
  padding: [16, 18],
  extraCssText: 'border-radius: 2px;',
  axisPointer: {
    lineStyle: {
      color: '#E9EAEC',
      width: 1,
    },
  },
  enterable: false,
  hideDelay: 0,
  confine: false,
  formatter(params) {
    if (!params) {
      return '';
    }
    let str = `<div style="min-width: 225px;"><p>${params[0].name}</p>`;
    
    params.map((x) => {
      str += `<p style="overflow: hidden;">
        <span style="
          width: 12px; 
          height: 12px; 
          float: left;
          border-radius: 100%;
          background: ${x.color}; 
          margin: 5px 8px 0 0;"></span>
        <span style="
          max-width: 150px; 
          margin-right: 16px;
          float: left;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;">${x.seriesName}</span>
        <span style="color: ${x.color}; float: right;">${value}</span>
      </p>`;
    });

    str += '</div>';
    return str;
  }
};
export default TOOLTIP;
