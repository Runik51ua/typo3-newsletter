Ext.ns('Ext.ux.TYPO3.Newsletter.Store'); 
/**
 * A Store for the email model using ExtDirect to communicate with the
 * server side extbase framework.
 */
Ext.ux.TYPO3.Newsletter.Store.Email = function() {
	
	emailStore = null;
	
	var initialize = function() {
		if (emailStore == null) {
			emailStore = new Ext.data.DirectStore({
				storeId: 'Tx_Newsletter_Domain_Model_Email',
				reader: new Ext.data.JsonReader({
					totalProperty:'total',
					successProperty:'success',
					idProperty:'__identity',
					root:'data',
					fields:[
					    {name: '__identity', type: 'int'},
					    {name: 'recipientAddress', type: 'string'},
						{name: 'beginTime', type: 'date'},
						{name: 'endTime', type: 'date'},
						{name: 'authCode', type: 'string'},
						{name: 'bounced', type: 'string'},
						{name: 'opened', type: 'boolean'},
						{name: 'recipientAddress', type: 'string'},
					]
				}),
				writer: new Ext.data.JsonWriter({
					encode:false,
					writeAllFields:false
				}),
				api: {
					read: Ext.ux.TYPO3.Newsletter.Remote.EmailController.listAction,
					update: Ext.ux.TYPO3.Newsletter.Remote.EmailController.updateAction,
					destroy: Ext.ux.TYPO3.Newsletter.Remote.EmailController.destroyAction,
					create: Ext.ux.TYPO3.Newsletter.Remote.EmailController.createAction
				},
				paramOrder: {
					read: ['data'],
					update: ['data'],
					create: ['data'],
					destroy: ['data']
				}
			});
		}
	}
	/**
	 * Public API of this singleton.
	 */
	return {
		initialize: initialize
	}
}();
