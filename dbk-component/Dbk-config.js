/* 
 * Copyright (C) 2014 ARIS B.V.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Custom configuration object for DBK component configuration
 * @author <a href="mailto:eddy.scheper@aris.nl">Eddy Scheper</a>
 */

// Deels kopie van TOC.js

Ext.define("viewer.components.CustomConfiguration",{
    extend: "viewer.components.ConfigObject",
    form: null,
    constructor: function (parentid,config){
        viewer.components.CustomConfiguration.superclass.constructor.call(this, parentid,config);
        if(config == undefined || config == null){
            config = new Object();
        }
        var me = this;
        this.form = new Ext.form.FormPanel({
            url: 'Home/SubmitForm',
            frame: false,
            title: 'Configureer dit component',
            bodyPadding: me.formPadding,
            defaults: {
                anchor: '100%'
            },
            width: me.formWidth,
            items: [{ 
                xtype: 'textfield',
                fieldLabel: 'Url van DBK data service:',
                name: 'dataPath',
                value: config.dataPath,
                labelWidth: me.labelWidth
            },{
                xtype: 'textfield',
                fieldLabel: 'Url van DBK media service:',
                name: 'mediaPath',
                value: config.mediaPath,
                labelWidth: me.labelWidth
            }],
            renderTo: parentid
        });      
    }
});
