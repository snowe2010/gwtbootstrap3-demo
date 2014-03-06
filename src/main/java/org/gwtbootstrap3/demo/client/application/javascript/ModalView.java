package org.gwtbootstrap3.demo.client.application.javascript;

/*
 * #%L
 * GwtBootstrap3
 * %%
 * Copyright (C) 2013 GwtBootstrap3
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.Widget;
import com.google.inject.Inject;
import com.gwtplatform.mvp.client.ViewImpl;
import org.gwtbootstrap3.client.shared.event.*;
import org.gwtbootstrap3.client.ui.Button;
import org.gwtbootstrap3.client.ui.Modal;
import org.gwtbootstrap3.client.ui.Paragraph;

/**
 * @author Joshua Godi
 */
public class ModalView extends ViewImpl implements ModalPresenter.MyView {
    @UiField
    Modal eventModal;
    @UiField
    Button clearLogButton;
    @UiField
    FlowPanel logRow;

    interface Binder extends UiBinder<Widget, ModalView> {
    }

    @Inject
    ModalView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));

        eventModal.addHideHandler(new ModalHideHandler() {
            @Override
            public void onHide(ModalHideEvent evt) {
                final Paragraph logEntry = new Paragraph();
                logEntry.setText("Hide event fired!");
                logRow.add(logEntry);
            }
        });

        eventModal.addHiddenHandler(new ModalHiddenHandler() {
            @Override
            public void onHidden(ModalHiddenEvent evt) {
                final Paragraph logEntry = new Paragraph();
                logEntry.setText("Hidden event fired!");
                logRow.add(logEntry);
            }
        });

        eventModal.addShowHandler(new ModalShowHandler() {
            @Override
            public void onShow(ModalShowEvent evt) {
                final Paragraph logEntry = new Paragraph();
                logEntry.setText("Show event fired!");
                logRow.add(logEntry);
            }
        });

        eventModal.addShownHandler(new ModalShownHandler() {
            @Override
            public void onShown(ModalShownEvent evt) {
                final Paragraph logEntry = new Paragraph();
                logEntry.setText("Shown event fired!");
                logRow.add(logEntry);
            }
        });
    }
}